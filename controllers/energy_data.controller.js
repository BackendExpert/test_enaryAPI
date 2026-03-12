const path = require('path')
const fs = require('fs')

const EnergyController = {
    fetchallEnergy: async (req, res) => {
        try {
            const sourceFile = path.join(__dirname, '../data/energy_monitoring_data.json');
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

module.exports = EnergyController;  