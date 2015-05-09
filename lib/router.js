Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'submitProblem'});

Router.route('/problems', {name: 'problemsAll'});