var createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");
var page;

function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

exports.createGradeSheet = function(args) {
    var topmost = frameModule.topmost();
    topmost.navigate({
        moduleName: "views/gradesheet",
        context: page.getViewById("numberOfQuestions").text 
    });
}