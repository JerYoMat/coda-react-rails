class CreateFinancialPeriods < ActiveRecord::Migration[5.2]
  def change
    create_table :financial_periods do |t|
        t.belongs_to :company 
        t.date :receiveddate
        t.string :periodlengthcode
        t.string :periodlength
        t.date :periodenddate
        t.bigint :fiscalyear
        t.string :fiscalquarter
        t.bigint :totalrevenue
        t.bigint :costofrevenue
        t.bigint :grossprofit
        t.bigint :researchdevelopmentexpense
        t.bigint :ebit
        t.bigint :incomebeforetaxes
        t.bigint :netincome
        t.bigint :cashandcashequivalents
        t.bigint :cashcashequivalentsandshortterminvestments
        t.bigint :othercurrentassets
        t.bigint :inventoriesnet
        t.bigint :totalcurrentassets
        t.bigint :intangibleassets
        t.bigint :propertyplantequipmentnet
        t.bigint :goodwill 
        t.bigint :otherassets 
        t.bigint :totalassets 
        t.bigint :othercurrentliabilities 
        t.bigint :totalshorttermdebt 
        t.bigint :totalcurrentliabilities 
        t.bigint :otherliabilities 
        t.bigint :totallongtermdebt 
        t.bigint :totalliabilities 
        t.bigint :retainedearnings 
        t.bigint :totalstockholdersequity 
        t.bigint :cashfromoperatingactivities 
        t.bigint :cashfrominvestingactivities 
        t.bigint :cashfromfinancingactivities 
        t.bigint :capitalexpenditures 
        t.bigint :cfdepreciationamortization 
        t.bigint :netchangeincash 
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
