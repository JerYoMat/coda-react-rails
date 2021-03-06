class CreateFinancials < ActiveRecord::Migration[5.2]
  def change
    create_table :financials do |t|
      t.string :scale, default: 'millions'
      t.string :amended
      t.belongs_to :company
      t.string :interestexpense
      t.string :changeincurrentassets
      t.string :changeincurrentliabilities
      t.string :changeininventories
      t.string :dividendspaid
      t.string :effectofexchangerateoncash
      t.string :capitalexpenditures
      t.string :cashfromfinancingactivities
      t.string :cashfrominvestingactivities
      t.string :cashfromoperatingactivities
      t.string :cfdepreciationamortization
      t.string :changeinaccountsreceivable
      t.string :investmentchangesnet
      t.string :netchangeincash
      t.string :totaladjustments
      t.string :ebit
      t.string :costofrevenue
      t.string :grossprofit
      t.string :incomebeforetaxes
      t.string :netincome
      t.string :netincomeapplicabletocommon
      t.string :totalrevenue
      t.string :sellinggeneraladministrativeexpenses
      t.string :commonstock
      t.string :cashandcashequivalents
      t.string :cashcashequivalentsandshortterminvestments
      t.string :goodwill
      t.string :intangibleassets
      t.string :inventoriesnet
      t.string :minorityinterest
      t.string :otherassets
      t.string :otherliabilities
      t.string :propertyplantequipmentnet
      t.string :retainedearnings
      t.string :totalassets
      t.string :totalcurrentassets
      t.string :totalcurrentliabilities
      t.string :totalliabilities
      t.string :totalreceivablesnet
      t.string :totalshorttermdebt
      t.string :totalstockholdersequity
      t.string :treasurystock
      t.string :taxonomyid
      t.string :cik
      t.string :companyname
      t.string :entityid
      t.string :primaryexchange
      t.string :marketoperator
      t.string :markettier
      t.string :primarysymbol
      t.string :siccode
      t.string :sicdescription
      t.string :usdconversionrate
      t.string :restated
      t.string :receiveddate
      t.string :preliminary
      t.string :periodlengthcode
      t.string :periodlength
      t.string :periodenddate
      t.string :original
      t.string :formtype
      t.string :fiscalyear
      t.string :fiscalquarter
      t.string :dcn
      t.string :currencycode
      t.string :crosscalculated
      t.string :audited
      t.timestamps
    end
  end
end
