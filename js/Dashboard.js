/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Load the Visualization API and the controls package.
google.load('visualization', '1.0', {'packages': ['controls']});

function DashboardConfig() {
    var slider;
    var category;
    var pie;
    var table;
    var dashboard;
}

function Dashboard(data) {
    var data;
    var cfg;

    this.cfg = new DashboardConfig();
    this.data = google.visualization.arrayToDataTable(data);

    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(this.draw);

    this.draw = function() {

        var cfg = this.cfg;

        // Define a slider control for the Age column.
        var slider = new google.visualization.ControlWrapper(cfg.slider);
        // Define a category picker control for the Gender column
        var categoryPicker = new google.visualization.ControlWrapper(cfg.category);
        // Define a Pie chart
        var pie = new google.visualization.ChartWrapper(cfg.pie);
        // Define a table
        var table = new google.visualization.ChartWrapper(cfg.table);


        // Create a dashboard
        new google.visualization.Dashboard(document.getElementById(cfg.dashboard)).
                // Establish bindings, declaring the both the slider and the category
                // picker will drive both charts.
                bind([slider, categoryPicker], [pie, table]).
                // Draw the entire dashboard.
                draw(this.data);
    };
}

function TableDashboard() {
    var idx;
    var pie;
    var table;
    var slider;
    var category;
    var dashboard;

    this.idx = -1;
    this.pie = 'pie';
    this.table = 'table';
    this.slider = 'slider';
    this.category = 'category';
    this.dashboard = 'dashboard';

    this.getContent = function() {
        this.idx++;

        var t = '\n\
<table class=\'' + this.dashboard + '\' id=\'' + this.dashboard + this.idx + '\' >\
    <tr>\
        <td class=\'' + this.slider + '\' id=\'' + this.slider + this.idx + '\' />\
        <td class=\'' + this.category + '\' id=\'' + this.category + this.idx + '\'  />\
    <tr>\
        <td class=\'' + this.pie + '\' id=\'' + this.pie + this.idx + '\' />\
        <td class=\'' + this.table + '\' id=\'' + this.table + this.idx + '\' />\
    </tr>\
</table>';
        return t;
    };

}