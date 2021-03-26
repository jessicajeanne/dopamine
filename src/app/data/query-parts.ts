export class QueryParts {
    public static selectAlbumDataQueryPart(): string {
        return `SELECT t.AlbumTitle AS albumTitle,
                    t.AlbumArtists AS albumArtists,
                    t.AlbumKey AS albumKey,
                    MAX(t.Artists) as artists,
                    MAX(t.Year) AS year,
                    MAX(t.DateFileCreated) AS dateFileCreated,
                    MAX(t.DateAdded) AS dateAdded,
                    MAX(t.DateLastPlayed) AS dateLastPlayed FROM Track t`;
    }
}
