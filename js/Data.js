/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Data() {
    var data = [];

    this.parser = function(values) {

        var data = [];

        var rows = values.split('\n');

        for (i = 0; i < rows.length; i++) {

            rows[i] = rows[i].trim();

            if (rows[i].length === 0) {
                continue;
            }

            k = rows[i].split('\t');

            if (k.length) {
                data.push(k);
            }
        }
        this.data = data;
    };

    this.putHeader = function(header) {
        var data = [];

        data.push(header);

        for (var i = 0; i < this.data.length; i++) {
            data.push(this.data[i]);
        }
        this.data = data;
    };

    this.count = function(fields) {
        var idx = [];

        var dt = [];
        var fdt = [];
        var cdt = [];

        for (var i = 0; i < fields.length; i++) {
            pos = this.data[0].indexOf(fields[i]);

            if (pos >= 0) {
                idx.push(pos);
            }
        }

        for (var i = 0; i < this.data.length; i++) {
            var k = [];
            for (x = 0; x < idx.length; x++) {
                k.push(this.data[i][idx[x]]);
            }

            if (i === 0) {
                k.push('Total');
                dt.push(k);
            } else {
                pos = fdt.indexOf(k.join(','));

                if (pos < 0) {
                    fdt.push(k.join(','));
                    cdt.push(1);
                } else {
                    cdt[pos]++;
                }
            }
        }

        for (var i = 0; i < fdt.length; i++) {
            k = fdt[i].split(',');
            k.push(cdt[i]);

            dt.push(k);
        }

        return dt;
    };
}