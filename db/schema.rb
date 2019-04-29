# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_28_223000) do

  create_table "companies", force: :cascade do |t|
    t.string "companyname"
    t.string "primarysymbol"
    t.string "primaryexchange"
    t.string "industry"
    t.string "sector"
    t.string "snapshot_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["companyname"], name: "index_companies_on_companyname"
    t.index ["primarysymbol"], name: "index_companies_on_primarysymbol"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id"
    t.integer "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_favorites_on_company_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "financials", force: :cascade do |t|
    t.integer "company_id"
    t.string "interestexpense"
    t.string "amended"
    t.string "changeincurrentassets"
    t.string "changeincurrentliabilities"
    t.string "changeininventories"
    t.string "dividendspaid"
    t.string "effectofexchangerateoncash"
    t.string "capitalexpenditures"
    t.string "cashfromfinancingactivities"
    t.string "cashfrominvestingactivities"
    t.string "cashfromoperatingactivities"
    t.string "cfdepreciationamortization"
    t.string "changeinaccountsreceivable"
    t.string "investmentchangesnet"
    t.string "netchangeincash"
    t.string "totaladjustments"
    t.string "ebit"
    t.string "costofrevenue"
    t.string "grossprofit"
    t.string "incomebeforetaxes"
    t.string "netincome"
    t.string "netincomeapplicabletocommon"
    t.string "totalrevenue"
    t.string "sellinggeneraladministrativeexpenses"
    t.string "commonstock"
    t.string "cashandcashequivalents"
    t.string "cashcashequivalentsandshortterminvestments"
    t.string "goodwill"
    t.string "intangibleassets"
    t.string "inventoriesnet"
    t.string "minorityinterest"
    t.string "otherassets"
    t.string "otherliabilities"
    t.string "propertyplantequipmentnet"
    t.string "retainedearnings"
    t.string "totalassets"
    t.string "totalcurrentassets"
    t.string "totalcurrentliabilities"
    t.string "totalliabilities"
    t.string "totalreceivablesnet"
    t.string "totalshorttermdebt"
    t.string "totalstockholdersequity"
    t.string "treasurystock"
    t.string "taxonomyid"
    t.string "cik"
    t.string "companyname"
    t.string "entityid"
    t.string "primaryexchange"
    t.string "marketoperator"
    t.string "markettier"
    t.string "primarysymbol"
    t.string "siccode"
    t.string "sicdescription"
    t.string "usdconversionrate"
    t.string "restated"
    t.string "receiveddate"
    t.string "preliminary"
    t.string "periodlengthcode"
    t.string "periodlength"
    t.string "periodenddate"
    t.string "original"
    t.string "formtype"
    t.string "fiscalyear"
    t.string "fiscalquarter"
    t.string "dcn"
    t.string "currencycode"
    t.string "crosscalculated"
    t.string "audited"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_financials_on_company_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "settings"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
