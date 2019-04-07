class CreateFinancialPeriods < ActiveRecord::Migration[5.2]
  def change
    create_table :financial_periods do |t|
        t.belongs_to :company 
        t.date :receiveddate
        t.string :periodlengthcode
        t.string :periodlength
        t.date :periodenddate
        t.integer :fiscalyear
        t.string :fiscalquarter
        t.integer :totalrevenue
        t.integer :costofrevenue
        t.integer :grossprofit
        t.integer :researchdevelopmentexpense
        t.integer :ebit
        t.integer :incomebeforetaxes
        t.integer :netincome
        t.integer :cashandcashequivalents
        t.integer :cashcashequivalentsandshortterminvestments
        t.integer :othercurrentassets
        t.integer :inventoriesnet
        t.integer :totalcurrentassets
        t.integer :intangibleassets
        t.integer :propertyplantequipmentnet
        t.integer :goodwill 
        t.integer :otherassets 
        t.integer :totalassets 
        t.integer :othercurrentliabilities 
        t.integer :totalshorttermdebt 
        t.integer :totalcurrentliabilities 
        t.integer :otherliabilities 
        t.integer :totallongtermdebt 
        t.integer :totalliabilities 
        t.integer :retainedearnings 
        t.integer :totalstockholdersequity 
        t.integer :cashfromoperatingactivities 
        t.integer :cashfrominvestingactivities 
        t.integer :cashfromfinancingactivities 
        t.integer :capitalexpenditures 
        t.integer :cfdepreciationamortization 
        t.integer :netchangeincash 
        t.string :formtype 
        t.string :audited 
        t.boolean :original 
        t.string :amended 
        t.boolean :preliminary 
        t.string :currencycode 
        t.boolean :crosscalculated 
        t.string :usdconversionrate
        t.timestamps
      end
    end
end
