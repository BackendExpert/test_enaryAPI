const path = require('path')
const fs = require('fs')

const FactorsController = {
    fetchallFactorsdata: async (req, res) => {
        try {
            const sourceFile = path.join(__dirname, '../data/sri_lanka_energy_dummy.json');
            fs.readFile(sourceFile, 'utf8', (err, data) => {
                if (err) {
                    return res.json({ Error: "No Data found..." });
                }
                try {
                    const jsondata = JSON.parse(data);
                    return res.json({ Status: "Success", Result: jsondata });
                } catch (parseErr) {
                    return res.json({ Error: "Data parsing error" });
                }
            });
        }
        catch (err) {
            console.log(err)
            return res.json({ Error: "Internal server error" });
        }
    }
};

module.exports = FactorsController;