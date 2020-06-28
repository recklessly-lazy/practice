textFromDocument = `Control stores are determined by the overall score of 8 different matching scores
Season Score: Different between Test store sales per week and Control store sales per week
Spend Score: Percentage difference between Test stores sales and Control store sales
Spend per Visit Score: Percentage different between Test stores spend per visit and Control stores spend per visit
Visits per Customer: Percentage difference between Test stores visits per customer and Control stores visits per customer
My Shopping Group Score: Percentage difference for each customer group between Test stores and Control stores aggregated to come up with the overall score
Mission Segment Score: Percentage difference for each mission group between Test stores and Control stores aggregated to come up with the overall score
Spend Penetration Score: Percentage difference between Test stores spend penetration and Control stores spend penetration
Transaction Penetration Score: Percentage difference between Test stores transaction penetration and Control stores transaction penetration
`;
textFromApplication = `Control stores are determined by the overall score of 8 different matching scores
Season Score:Different between Test store sales per week and Control store sales per week
Spend Score:Percentage difference between Test stores sales and Control store sales
Spend per Visit Score:Percentage different between Test stores spend per visit and Control stores spend per visit
Visits Per Customer:Percentage difference between Test stores visits per customer and Control stores visits per customer
My Shopping Group Score:Percentage difference for each customer group between Test stores and Control stores aggregated to come up with the overall score
Mission Segment Score:Percentage difference for each mission group between Test stores and Control stores aggregated to come up with the overall score
Spend Penetration Score:Percentage difference between Test stores spend penetration and Control stores spend penetration
Transaction Penetration Score:Percentage difference between Test stores transaction penetration and Control stores transaction penetration`;
textFromDocument = textFromDocument.split('\n').join('').split(' ').join('')
textFromApplication = textFromApplication.split('\n').join('').split(' ').join('')
// adding something new for the sake of it

console.log('from word document: ',textFromDocument.length)
console.log('from application: ',textFromApplication.length)
