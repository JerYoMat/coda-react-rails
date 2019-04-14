require 'csv'


data = CSV.foreach('db/cut-down-combo-list.csv') do |row|
  if Industry.find_by(name: row[2])
    industry_id = Industry.find_by(name: row[2]).id 
  else
    industry = Industry.create!(name: row[2])
    industry_id = industry.id 
  end 
  if Sector.find_by(name: row[3])
    sector_id = Sector.find_by(name: row[3]).id 
  else
    sector = Sector.create!(name: row[3])
    sector_id = sector.id 
  end 


  Company.create(
    primarysymbol: row[0],
    companyname: row[1],
    industry_id: industry_id,
    sector_id: sector_id,
    primaryexchange: row[5],
    snapshot_link: row[4]
  )
end 
