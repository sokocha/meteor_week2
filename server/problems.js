Meteor.methods({
  insertProblem: function(post) {
    var postId = Problems.insert(post);
    return {
      _id: postId
    };
  }
});