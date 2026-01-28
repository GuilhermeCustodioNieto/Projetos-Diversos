using System.ComponentModel.DataAnnotations;

namespace CreditApi.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; } = null;

        [Required]
        [StringLength(50)]
        public string Rg { get; set; } = null;

        [Required]

        public string Cpf { get; set; } = null;

        [Required]
        public string Email { get; set; } = null;

        [Required]
        public string Password { get; set; } = null;

        [Required]
        public decimal MonthlyIncome { get; set; }

        [Required]
        public double CreditScore { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

    }
}
