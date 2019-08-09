using System.Net;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Rafael.Millis.Model.Interfaces;
using Rafael.Millis.Model.ViewModels;

namespace Rafael.Millis.BLL
{
    public class Repository : IRepository
    {
        private HttpContext httpContext;

        public Repository(IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            this.httpContext = httpContextAccessor.HttpContext;
            this.configuration = configuration;
        }


        /// <summary>
        /// Do the repository search and return list of results
        /// </summary>
        public List<RepositSearch> GetGITDataRepository(string searchWord)
        {
            var client = new WebClient();

            //Add Settings
            string gitHubApiUri = configuration["AppSetting:GitHubAPIUri"] + searchWord;
            client.Headers.Add(configuration["AppSetting:UserAgentHeaderName"], configuration["AppSetting:UserAgentHeaderValue"]);

            string response = client.DownloadString(gitHubApiUri);
            var release = JObject.Parse(response);
            string items = release.GetValue("items").ToString();
            List<RepositSearch> reposits = JsonConvert.DeserializeObject<List<RepositSearch>>(items);
            foreach (RepositSearch rs in reposits)
            {
                rs.Html_URL = rs.Html_URL.Substring(0, rs.Html_URL.LastIndexOf(@"/")) + imagePostfix;
            }
            return reposits;
        }


        /// <summary>
        /// Add new bookmark and store it at ASP.NET Session
        /// </summary>
        /// <param name="newUser"></param>
        public void AddToBookmark(RepositSearch newUser)
        {
            bookmarks = httpContext.Session.Get<List<RepositSearch>>(BookmarksList);
            if (bookmarks == null)
            {
                bookmarks = new List<RepositSearch>();
            }
            bookmarks.Add(newUser);
            httpContext.Session.Set<List<RepositSearch>>(BookmarksList, bookmarks );
        }


        /// <summary>
        /// Get list of all bookmark that stored in Session
        /// </summary>
        /// <returns></returns>
        public List<RepositSearch> GetBookmarks()
        {
            List<RepositSearch> list = httpContext.Session.Get<List<RepositSearch>>(BookmarksList) ;
            if (list == null)
            {
                list = new List<RepositSearch>();
            }
            return list;
        }


        //some class members
        private List<RepositSearch> bookmarks;
        private IConfiguration configuration;
        private const string imagePostfix = ".png";
        public const string BookmarksList = "bookmarks";
    }
}

