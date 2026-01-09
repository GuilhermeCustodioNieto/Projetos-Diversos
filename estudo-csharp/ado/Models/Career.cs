namespace ado.Models
{
    public class Career
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public IList<CareerItem> Items { get; set; }

        public Career()
        {
            this.Items = new List<CareerItem>();
        }
    }
}