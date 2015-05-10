Template.submitProblem.events({
  'click .route': function(){
    // problem refers to the name of the input
    if (problem.value !='') {
      // magic effect
      $('.part2').addClass('magictime swashIn');
      // show/hide items with removeClass()/addClass()
      $('#submit-problem').addClass('hidden');
      $('#submit-why1').removeClass('hidden');
    } else {
      alert('You need to enter a problem');
    }
  },

  'click .answer1': function(){
    // why1 refers to the name of the inputt
    if (why1.value != ''){
      // magic effect
      $('.part3').addClass('magictime swashIn');
      // show/hide items with removeClass()/addClass()
      $('#submit-why1').addClass('hidden');
      $('#submit-why2').removeClass('hidden');
    } else {
      alert('You need to answer why it is a problem');
    }
  },

  'click .answer2':function() {
      if (why2.value != '') {
        $('.part4').addClass('magictime swashIn');
        //show/hide items with removeClass()/addClass()
        $('#submit-why2').addClass('hidden');
        $('#submit-why3').removeClass('hidden');
      } else {
        alert("You need to answer why is it problem");
      }
    },
    'click .answer3':function() {
      if (why3.value != '') {
        $('.part5').addClass('magictime swashIn');
        //show/hide items with removeClass()/addClass()
        $('#submit-why3').addClass('hidden');
        $('#submit-why4').removeClass('hidden');
      } else {
        alert("You need to answer why is it problem");
      }
    },
    'click .answer4':function() {
      if (why4.value != '') {
        $('.part6').addClass('magictime swashIn');
        //show/hide items with removeClass()/addClass()
        $('#submit-why4').addClass('hidden');
        $('#submit-why5').removeClass('hidden');
      } else {
        alert("You need to answer why is it problem");
      }
    },
    'click .answer5':function() {
      if (why5.value != '') {
        $('.part7').addClass('magictime swashIn');
        //show/hide items with removeClass()/addClass()
        $('#submit-why5').addClass('hidden');
        $('#submit-solution').removeClass('hidden');
      } else {
        alert("You need to answer why is it problem");
      }
    },
    'click .back1': function(){
      $('#submit-why1').addClass('hidden');
      $('#submit-problem').removeClass('hidden');
      $('.part1').addClass('magictime swashIn')
    },
    'click .back2': function(){
      $('#submit-why2').addClass('hidden');
      $('#submit-why1').removeClass('hidden');
      $('.part2').addClass('magictime swashIn')
    },
    'click .back3': function(){
      $('#submit-why3').addClass('hidden');
      $('#submit-why2').removeClass('hidden');
      $('.part2').addClass('magictime swashIn')
    },
    'click .back4': function(){
      $('#submit-why4').addClass('hidden');
      $('#submit-why3').removeClass('hidden');
      $('.part2').addClass('magictime swashIn')
    },
    'click .back5': function(){
      $('#submit-why5').addClass('hidden');
      $('#submit-why4').removeClass('hidden');
      $('.part2').addClass('magictime swashIn')
    },
    'click .back6': function(){
      $('#submit-solution').addClass('hidden');
      $('#submit-why5').removeClass('hidden');
      $('.part2').addClass('magictime swashIn')
    },

    'submit form':function(event) {
      event.preventDefault();
      
      var post = {
        postProblem: $(event.target).find('[name=problem]').val(),
        postWhy1: $(event.target).find('[name=why1]').val(),
        postWhy2: $(event.target).find('[name=why2]').val(),
        postWhy3: $(event.target).find('[name=why3]').val(),
        postWhy4: $(event.target).find('[name=why4]').val(),
        postWhy5: $(event.target).find('[name=why5]').val(),
        postSolution:$(event.target).find('[name=solution]').val(),
        submitted: new Date()
      };
      
      var solutionValue = event.target.solution.value;
      if (solutionValue != '') {
        Meteor.call('insertProblem', post, function(error,result) {
          // Only when we don't get empty object 
          if(!error){
            Router.go('problemPage', result);
          }
        });
      }
    }

  });