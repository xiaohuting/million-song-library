/**
 * Song model
 * @author anram88
 * @param {catalogStore} catalogStore
 * @param {$log} $log
 * @param {songStore} songStore
 * @param {$rootScope} $rootScope
 * @returns {{getSong: getSong, getSongs: getSongs, song: null, songs: null}}
 */
export default function songModel(catalogStore, $log, songStore, $rootScope) {
  let _model = {
    getSong: getSong,
    getSongs: getSongs,
    filterSongs: filterSongs,
    song: null,
    songs: null,
  };
  return _model;

  /**
   * Retrieves information of a single song
   * @param {int} songId
   */
  async function getSong(songId) {
    try {
      _model.song = await songStore.fetch(songId);
      $rootScope.$new().$evalAsync();
    } catch (err) {
      $log.warn(err);
    }
  }

  /**
   * Gets all songs
   */
  async function getSongs() {
    try {
      const songList = await catalogStore.fetch();
      _model.songs = songList.songs;
      $rootScope.$new().$evalAsync();
    }
    catch (error) {
      $log.warn(error);
    }
  }

  /**
   * Gets songs filtered by rating and genre
   * @param {integer} rating
   * @param {string} genre
   * @param {function} callback
   */
  async function filterSongs(rating, genre, callback) {
    try {
      const songsList = await catalogStore.fetch({ rating: rating, genre: genre });
      const songs = songsList.songs;
      if(callback) {
        callback(songs);
      }
    }
    catch(error) {
      $log.warn(error);
    }
  }

}