var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

function createViewModel(numberOfQuestions, invertPercentages) {
    var viewModel = new Observable();
    viewModel.numberOfQuestions = numberOfQuestions;

    viewModel.gradePairs = new ObservableArray();

    for (var i = 0; i <= numberOfQuestions; i++) {
        if (invertPercentages) {
            var percentage = Math.round((1 - i/numberOfQuestions) * 100);    
        } else {
            var percentage = Math.round((i/numberOfQuestions) * 100);
        }

        viewModel.gradePairs.push({
            count: i,
            percentage: percentage
        });
    }

    viewModel.onTap = function() {
        this.counter--;
        this.set("message", getMessage(this.counter));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;