require 'csv'


data = CSV.foreach('db/mini_seed.csv', :headers => true) do |row|
  Company.create(
    primarysymbol: row[0],
    companyname: row[1],
    sector: row[2],
    industry: row[3],
    snapshot_link: row[4],
    primaryexchange: row[5]
  )
end 
