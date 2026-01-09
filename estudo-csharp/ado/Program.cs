using System;
using Microsoft.Data.SqlClient;
using Dapper;
using ado.Models;

namespace ado;

public class Program
{
    public static void Main(string[] args)
    {
        const string connectionString = "Server=localhost,1433;Database=balta;User ID=sa;Password=1q2w3e4r@#$;TrustServerCertificate=True";

        using (var connection = new SqlConnection(connectionString))
        {
            //CreateCategory(connection); 
            //UpdateCategory(connection);
            //CreateManyCategory(connection);
            //DeleteCategory(connection);
            //ExecuteProcedure(connection);
            //ExecuteReadProcedure(connection);
            //ListCategories(connection);
            //OneToOne(connection);
            ManyToMany(connection);
        }
    }

    public static void ListCategories(SqlConnection connection)
    {
        var categories = connection.Query<Category>("SELECT [Id], [Title] FROM [Category]");
        foreach (var item in categories)
        {
            Console.WriteLine($"{item.Id} - {item.Title}");
        }

    }

    static void CreateCategory(SqlConnection connection)
    {
        var category = new Category();
        category.Id = Guid.NewGuid();
        category.Title = "Amazon AWS";
        category.Url = "amazon";
        category.Description = "Serviços da AWS";
        category.Summary = "AWS Cloud Computing";
        category.Order = 8;
        category.Featured = false;

        var insertSQL = @"INSERT INTO [Category] VALUES (
        @id, 
        @title, 
        @url, 
        @summary, 
        @order, 
        @description, 
        @featured)";

        var rows = connection.Execute(insertSQL, new
        {
            category.Id,
            category.Title,
            category.Url,
            category.Summary,
            category.Order,
            category.Description,
            category.Featured
        });

        Console.WriteLine($"{rows} linha(s) inserida(s)");
    }

    static void UpdateCategory(SqlConnection connection)
    {
        var updateSQL = "UPDATE [Category] SET [Title] = @title WHERE [Id] = @id";

        var rows = connection.Execute(updateSQL, new
        {
            id = new Guid("2c8f4a08-3cef-4f74-8847-ea9cb09ec5dd"),
            title = "AWS - Amazon Web Services"
        });

        Console.WriteLine($"{rows} linha(s) atualizada(s)");
    }

    static void CreateManyCategory(SqlConnection connection)
    {
        var category = new Category();
        category.Id = Guid.NewGuid();
        category.Title = "Amazon AWS";
        category.Url = "amazon";
        category.Description = "Serviços da AWS";
        category.Summary = "AWS Cloud Computing";
        category.Order = 8;
        category.Featured = false;

        var category2 = new Category();
        category2.Id = Guid.NewGuid();
        category2.Title = "Category 2";
        category2.Url = "Category 2";
        category2.Description = "Category 2";
        category2.Summary = "Category 2";
        category2.Order = 9;
        category2.Featured = false;

        var insertSQL = @"INSERT INTO [Category] VALUES (
        @id, 
        @title, 
        @url, 
        @summary, 
        @order, 
        @description, 
        @featured)";

        var rows = connection.Execute(insertSQL, new[]
        {
            new
            {
                category.Id,
                category.Title,
                category.Url,
                category.Summary,
                category.Order,
                category.Description,
                category.Featured
            },
            new
            {
                category2.Id,
                category2.Title,
                category2.Url,
                category2.Summary,
                category2.Order,
                category2.Description,
                category2.Featured
            }
        });

        Console.WriteLine($"{rows} linha(s) inserida(s)");
    }

    static void DeleteCategory(SqlConnection connection)
    {
        var deleteSQL = "DELETE FROM [Category] WHERE [Id] = @id";

        var rows = connection.Execute(deleteSQL, new
        {
            id = new Guid("2c8f4a08-3cef-4f74-8847-ea9cb09ec5dd")
        });

        Console.WriteLine($"{rows} linha(s) deletada(s)");
    }

    static void ExecuteProcedure(SqlConnection connection)
    {
        var procedure = "[spDeleteStudent]";
        var pars = new { StudentId = "bea14987-125e-41db-bd25-cb7c909eb615" };
        var rows = connection.Execute(procedure, pars, commandType: System.Data.CommandType.StoredProcedure);
        Console.WriteLine($"{rows} linha(s) deletada(s)");
    }

    static void ExecuteReadProcedure(SqlConnection connection)
    {
        var procedure = "[spGetCoursesByCategory]";
        var pars = new { CategoryId = "b4c5af73-7e02-4ff7-951c-f69ee1729cac" };
        var courses = connection.Query(procedure, pars, commandType: System.Data.CommandType.StoredProcedure);

        foreach (var item in courses)
        {
            Console.WriteLine($"{item.Id} - {item.Title}");
        }
    }

    static void OneToOne(SqlConnection connection)
    {
        var sql = @"SELECT * FROM [CareerItem] INNER JOIN [Course] ON [CareerItem].[CourseId] = [Course].[Id]";
        var items = connection.Query<CareerItem, Course, CareerItem>(sql, (careerItem, course) => { careerItem.Course = course; return careerItem; }, splitOn: "Id");

        foreach (var item in items)
        {
            Console.WriteLine(item.Title);
        }
    }

    static void ManyToMany(SqlConnection connection)
    {
        var sql = @"
                SELECT 
                    [Career].[Id],
                    [Career].[Title],
                    [CareerItem].[CareerId],
                    [CareerItem].[Title]
                FROM 
                    [Career] 
                INNER JOIN 
                    [CareerItem] ON [CareerItem].[CareerId] = [Career].[Id]
                ORDER BY
                    [Career].[Title]";

        var careers = new List<Career>();
        var items = connection.Query<Career, CareerItem, Career>(
            sql,
            (career, item) =>
            {
                var car = careers.Where(x => x.Id == career.Id).FirstOrDefault();
                if (car == null)
                {
                    car = career;
                    car.Items.Add(item);
                    careers.Add(car);
                }
                else
                {
                    car.Items.Add(item);
                }

                return career;
            }, splitOn: "CareerId");

        foreach (var career in careers)
        {
            Console.WriteLine($"{career.Title}");
            foreach (var item in career.Items)
            {
                Console.WriteLine($" - {item.Title}");
            }
        }
    }

}
