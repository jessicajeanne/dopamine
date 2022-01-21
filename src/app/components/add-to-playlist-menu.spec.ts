import { IMock, Mock } from 'typemoq';
import { BasePlaylistFolderService } from '../services/playlist-folder/base-playlist-folder.service';
import { BasePlaylistService } from '../services/playlist/base-playlist.service';
import { AddToPlaylistMenu } from './add-to-playlist-menu';

describe('PlaylistsContextMenu', () => {
    let playlistFolderServiceMock: IMock<BasePlaylistFolderService>;
    let playlistServiceMock: IMock<BasePlaylistService>;
    let playlistsContextMenu: AddToPlaylistMenu;

    beforeEach(() => {
        playlistFolderServiceMock = Mock.ofType<BasePlaylistFolderService>();
        playlistServiceMock = Mock.ofType<BasePlaylistService>();
        playlistsContextMenu = new AddToPlaylistMenu(playlistFolderServiceMock.object, playlistServiceMock.object);
    });

    describe('initializeAsync', () => {
        it('should create', () => {
            // Arrange

            // Act

            // Assert
            expect(playlistsContextMenu).toBeDefined();
        });

        it('should initialize empty playlists', () => {
            // Arrange

            // Act

            // Assert
            expect(playlistsContextMenu.playlists.length).toEqual(0);
        });
    });
});
