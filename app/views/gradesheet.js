var Label = require("ui/label").Label;
var GridLayout = require("ui/layouts/grid-layout").GridLayout;
var ItemSpec = require("ui/layouts/grid-layout").ItemSpec;
var GridUnitType = require("ui/layouts/grid-layout").GridUnitType;
var createViewModel = require("./gradesheet-view-model").createViewModel;


var createGridLayout = function() {
    var layout = new GridLayout();
    var firstColumn = new ItemSpec(45, GridUnitType.pixel);
    var secondColumn = new ItemSpec(45, GridUnitType.pixel);


    layout.addColumn(firstColumn);
    layout.addColumn(secondColumn);
    layout.addRow(new ItemSpec(1, GridUnitType.auto));

    return layout;
}


exports.onNavigatingTo = function(args) {
    page = args.object;
    page.bindingContext = createViewModel(page.navigationContext);
    
    var gradePairs = page.bindingContext.gradePairs;

    for (var i = 0; i < gradePairs.length; i++) {
        var labelCount = new Label();
        var labelPercentage = new Label();
        var layout = createGridLayout();
        var item = gradePairs.getItem(i);

        labelCount.text = item.count;
        labelCount.cssClass = "questionCount"; 
        labelPercentage.text = item.percentage + "%";

        GridLayout.setColumn(labelCount, 0);
        GridLayout.setColumn(labelPercentage, 1);


        layout.addChild(labelCount);
        layout.addChild(labelPercentage);
        
        page.getViewById("gradeSheet").addChild(layout);
    
    }

}