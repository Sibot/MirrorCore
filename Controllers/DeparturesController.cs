namespace MirrorCore.Controllers
{
    public class DeparturesController
    {
        public string GetFutureDepartures()
        {
            var apiKey = "ac18ce079c544b3885abf1d9717547b1";
            var defaultSiteId = 3878;
            var defaultTimeWindow = 60;
            var departuresUrl = $"http://api.sl.se/api2/realtimedepartures.json?key={apiKey}&siteid={defaultSiteId}&timewindow={defaultTimeWindow}";

            return Utils.Http.Get(departuresUrl);
        }
    }
}
