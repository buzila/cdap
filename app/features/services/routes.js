angular.module(PKG.name + '.feature.services')
  .config(function($stateProvider, $urlRouterProvider, MYAUTH_ROLE) {
    $stateProvider
      .state('services', {
        url: '/services',
        abstract: true,
        parent: 'programs',
        data: {
          authorizedRoles: MYAUTH_ROLE.all,
          highlightTab: 'development'
        },
        template: '<ui-view/>'
      })
      .state('services.list', {
        url: '/list',
        templateUrl: '/assets/features/services/templates/list.html',
        controller: 'CdapServicesListController',
        ncyBreadcrumb: {
          parent: 'apps.detail.overview',
          label: 'Services'
        }
      })
      .state('services.detail', {
        url: '/:programId',
        templateUrl: '/assets/features/services/templates/detail.html',
        onEnter: function($state, $timeout) {

          $timeout(function() {
            if ($state.is('services.detail')) {
              $state.go('services.detail.status');
            }
          });

        },
        ncyBreadcrumb: {
          parent: 'apps.detail.overview',
          label: '{{$state.params.programId | caskCapitalizeFilter}}'
        }
      })
        .state('services.detail.status', {
          url: '/status',
          templateUrl: "/assets/features/services/templates/tabs/status.html",
          ncyBreadcrumb: {
            skip: true
          }
        })
        .state('services.detail.data', {
          url: '/data',
          templateUrl: "/assets/features/services/templates/tabs/data.html",
          ncyBreadcrumb: {
            skip: true
          }
        })
        .state('services.detail.metadata', {
          url: '/metadata',
          templateUrl: "/assets/features/services/templates/tabs/metadata.html",
          ncyBreadcrumb: {
            skip: true
          }
        })
        .state('services.detail.history', {
          url: '/history',
          templateUrl: "/assets/features/services/templates/tabs/history.html",
          ncyBreadcrumb: {
            skip: true
          }
        })
        .state('services.detail.logs', {
          url: '/logs',
          controller: 'ServicesLogsController',
          templateUrl: "/assets/features/services/templates/tabs/logs.html",
          ncyBreadcrumb: {
            skip: true
          }
        })
          .state('services.detail.logs.detail', {
            url: '',
            abstract: true,
            template: '<ui-view/>',
            ncyBreadcrumb: {
              skip: true
            }
          })
            .state('services.detail.logs.detail.all', {
              url: '/all',
              templateUrl: '/assets/features/services/templates/tabs/logs/all.html',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('services.detail.logs.detail.info', {
              url: '/info',
              templateUrl: '/assets/features/services/templates/tabs/logs/info.html',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('services.detail.logs.detail.warn', {
              url: '/warn',
              templateUrl: '/assets/features/services/templates/tabs/logs/warn.html',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('services.detail.logs.detail.error', {
              url: '/error',
              templateUrl: '/assets/features/services/templates/tabs/logs/error.html',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('services.detail.logs.detail.debug', {
              url: '/debug',
              templateUrl: '/assets/features/services/templates/tabs/logs/debug.html',
              ncyBreadcrumb: {
                skip: true
              }
            })
            .state('services.detail.logs.detail.other', {
              url: '/other',
              templateUrl: '/assets/features/services/templates/tabs/logs/other.html',
              ncyBreadcrumb: {
                skip: true
              }
            })
        .state('services.detail.resources', {
          url: '/resource',
          templateUrl: "/assets/features/services/templates/tabs/resources.html",
          ncyBreadcrumb: {
            skip: true
          }
        })
  });
