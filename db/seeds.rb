require 'csv'

default_user = User.new(username: 'public', password: 'test')
default_user.save 


data = CSV.foreach('db/SecondComboList.csv') do |row|
  if Industry.find_by(name: row[3])
    industry_id = Industry.find_by(name: row[3]).id 
  else
    industry = Industry.create!(name: row[3])
    industry_id = industry.id 
  end 
  if Sector.find_by(name: row[4])
    sector_id = Sector.find_by(name: row[4]).id 
  else
    sector = Sector.create!(name: row[4])
    sector_id = sector.id 
  end 


  Company.create(
    primarysymbol: row[0],
    companyname: row[1],
    industry_id: industry_id,
    sector_id: sector_id,
    primaryexchange: row[5],
    user_id: default_user.id 
  )
end 
