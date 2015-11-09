import angular from 'angular';
import request from './request';
import entityMapper from './entityMapper';
import myLibraryStore from './services/myLibraryStore';
import recentSongsStore from './services/recentSongsStore';
import songStore from './services/songStore';
import sessionInfoStore from './services/sessionInfoStore';
import artistStore from './services/artistStore';
import albumStore from './services/albumStore';
import loginStore from './services/loginStore';
import logoutStore from './services/logoutStore';
import rateStore from './services/rateStore';
import facetStore from './services/facetStore';
import ArtistInfoEntity from './entities/ArtistInfoEntity';
import ArtistListEntity from './entities/ArtistListEntity';
import FacetInfoEntity from './entities/FacetInfoEntity';
import FacetListEntity from './entities/FacetListEntity';
import AlbumInfoEntity from './entities/AlbumInfoEntity';
import AlbumListEntity from './entities/AlbumListEntity';
import SongListEntity from './entities/SongListEntity';
import StatusResponseEntity from './entities/StatusResponseEntity';
import LoginSuccessResponseEntity from './entities/LoginSuccessResponseEntity';
import SessionInfoEntity from './entities/SessionInfoEntity';
import SongInfoEntity from './entities/SongInfoEntity';

export default angular.module('msl.datastore', [])
  .factory('request', request)
  .factory('entityMapper', entityMapper)
  .factory('myLibraryStore', myLibraryStore)
  .factory('recentSongsStore', recentSongsStore)
  .factory('songStore', songStore)
  .factory('sessionInfoStore', sessionInfoStore)
  .factory('artistStore', artistStore)
  .factory('albumStore', albumStore)
  .factory('loginStore', loginStore)
  .factory('logoutStore', logoutStore)
  .factory('rateStore', rateStore)
  .factory('facetStore', facetStore)
  .value('ArtistInfoEntity', ArtistInfoEntity)
  .value('ArtistListEntity', ArtistListEntity)
  .value('FacetInfoEntity', FacetInfoEntity)
  .value('FacetListEntity', FacetListEntity)
  .value('AlbumInfoEntity', AlbumInfoEntity)
  .value('AlbumListEntity', AlbumListEntity)
  .value('SongListEntity', SongListEntity)
  .value('StatusResponseEntity', StatusResponseEntity)
  .value('LoginSuccessResponseEntity', LoginSuccessResponseEntity)
  .value('SessionInfoEntity', SessionInfoEntity)
  .value('SongInfoEntity', SongInfoEntity)
  .name;
