using System.Collections.Generic;
using Rafael.Millis.Model.ViewModels;

namespace Rafael.Millis.Model.Interfaces
{
    public interface IRepository
    {
        List<RepositSearch> GetGITDataRepository(string searchWord);
        void AddToBookmark(RepositSearch newUser);
        List<RepositSearch> GetBookmarks();    }
}
