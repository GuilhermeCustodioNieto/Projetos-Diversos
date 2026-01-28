using System;
using GameStore.Api.Data;
using Microsoft.EntityFrameworkCore;

namespace GameStore.Api.Endpoints;

public static class GenreEndpoints
{
    public static void MapGenresEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("/genres");

        group.MapGet("/", async (GameStoreContext dbContext) =>
        {
            var genres = await dbContext.Genres
                .Select(genre => new Dtos.GenreDto(genre.Id, genre.Name))
                .AsNoTracking()
                .ToListAsync();

            return Results.Ok(genres);
        });
    }
}
