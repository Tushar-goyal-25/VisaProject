const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Function to calculate average spending
    function calculateAverageSpending(details) {
        const spendingData = {};

        details.forEach(detail => {
            const familyCode = detail.Typeoffamilycode;
            const spentOn = detail.spenton;
            const amount = parseFloat(detail.amount);

            if (!spendingData[familyCode]) {
                spendingData[familyCode] = {};
            }

            if (!spendingData[familyCode][spentOn]) {
                spendingData[familyCode][spentOn] = { total: 0, count: 0 };
            }

            spendingData[familyCode][spentOn].total += amount;
            spendingData[familyCode][spentOn].count += 1;
        });

        const averageSpending = {};

        Object.keys(spendingData).forEach(familyCode => {
            averageSpending[familyCode] = {};
            Object.keys(spendingData[familyCode]).forEach(spentOn => {
                const { total, count } = spendingData[familyCode][spentOn];
                averageSpending[familyCode][spentOn] = total / count;
            });
        });

        return averageSpending;
    }

    // Calculate average spending
    const averageSpending = calculateAverageSpending(jsonData.Details);

    // Write the result to a new JSON file
    fs.writeFile('output.json', JSON.stringify(averageSpending, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Average spending data written to output.json');
        }
    });
});
