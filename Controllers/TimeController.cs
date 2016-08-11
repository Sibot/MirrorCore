namespace MirrorCore.Controllers
{
    public class TimeController
    {
        public string GetCurrentTime()
        {
            var timeUrl = "http://www.timeapi.org/utc/now.json";

            return Utils.Http.Get(timeUrl, fakeUserAgent: true);
        }
    }
}
