/* global describe, it, expect, beforeEach, inject */
import datastoreModule from 'modules/datastore/module';

describe('loginStore', () => {
  const EMAIL = 'a@a.com';
  const PASSWORD = 'password';
  const params = { email: EMAIL, password: PASSWORD };

  let loginStore, request, entityMapper, LoginSuccessResponseEntity;

  beforeEach(() => {
    angular.mock.module(datastoreModule, ($provide) => {
      request = jasmine.createSpyObj('request', ['post']);
      entityMapper = jasmine.createSpy('entityMapper');

      $provide.value('request', request);
      $provide.value('entityMapper', entityMapper);
    });

    inject((_loginStore_, _LoginSuccessResponseEntity_) => {
      loginStore = _loginStore_;
      LoginSuccessResponseEntity = _LoginSuccessResponseEntity_;
    });
  });

  describe('push', () => {
    it('should do a post request to the login edge', (done) => {
      (async () => {
        await loginStore.push(EMAIL, PASSWORD);
        expect(request.post).toHaveBeenCalledWith('/api/v1/loginedge/login', params, jasmine.any(Object));
        done();
      })();
    });

    it('should map the response into a LoginSuccessResponseEntity', (done) => {
      (async () => {
        const response = 'a response';
        request.post.and.returnValue(response);
        await loginStore.push(EMAIL, PASSWORD);
        expect(entityMapper).toHaveBeenCalledWith(response, LoginSuccessResponseEntity);
        done();
      })();
    });
  });
});