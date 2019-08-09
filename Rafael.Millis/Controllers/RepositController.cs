using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Rafael.Millis.Model.Interfaces;
using Rafael.Millis.Model.ViewModels;

namespace Rafael.Millis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepositController : ControllerBase
    {
        public RepositController(IConfiguration  configuration, IRepository repository)
        {
            this.configuration = configuration;
            this.repository = repository;      
        }


        public class Person {
            public string name { get; set; }
        }


        [HttpGet("[action]/{txtSearch}")]
        public IEnumerable<RepositSearch> Search(string txtSearch)
        {
            List<RepositSearch> results = repository.GetGITDataRepository(txtSearch);
            return results;
        }


        /// <summary>
        /// Add bookmark
        /// </summary>
        /// <param name="user"></param>
        [HttpPost("[action]")]
        public void AddToBookmark([FromBody] RepositSearch user)
        {
            repository.AddToBookmark(user);
        }


        /// <summary>
        /// Get bookmarks list 
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public IEnumerable<RepositSearch> GetBookmarks()
        {
            return repository.GetBookmarks();
        }

        
        private IConfiguration configuration;
        private IRepository repository;
    }
}
