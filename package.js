
Package.describe({
  name    : 'semantic:ui-list',
  summary : 'Semantic UI - List: Single component release',
  version : '2.1.6',
  git     : 'git://github.com/Semantic-Org/UI-List.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'list.css'
  ], 'client');
});
