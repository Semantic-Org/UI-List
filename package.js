var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-list',
  summary : 'Semantic UI - List (official): Single component release of list',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-List.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
