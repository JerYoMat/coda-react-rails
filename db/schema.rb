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

ActiveRecord::Schema.define(version: 2019_04_14_203717) do

  create_table "companies", force: :cascade do |t|
    t.string "companyname"
    t.string "primarysymbol"
    t.string "primaryexchange"
    t.integer "industry_id"
    t.integer "sector_id"
    t.string "snapshot_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["companyname"], name: "index_companies_on_companyname"
    t.index ["industry_id"], name: "index_companies_on_industry_id"
    t.index ["primarysymbol"], name: "index_companies_on_primarysymbol"
    t.index ["sector_id"], name: "index_companies_on_sector_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id"
    t.integer "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_favorites_on_company_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "financial_periods", force: :cascade do |t|
    t.integer "company_id"
    t.date "receiveddate"
    t.string "periodlengthcode"
    t.string "periodlength"
    t.date "periodenddate"
    t.bigint "fiscalyear"
    t.string "fiscalquarter"
    t.bigint "totalrevenue"
    t.bigint "costofrevenue"
    t.bigint "grossprofit"
    t.bigint "researchdevelopmentexpense"
    t.bigint "ebit"
    t.bigint "incomebeforetaxes"
    t.bigint "netincome"
    t.bigint "cashandcashequivalents"
    t.bigint "cashcashequivalentsandshortterminvestments"
    t.bigint "othercurrentassets"
    t.bigint "inventoriesnet"
    t.bigint "totalcurrentassets"
    t.bigint "intangibleassets"
    t.bigint "propertyplantequipmentnet"
    t.bigint "goodwill"
    t.bigint "otherassets"
    t.bigint "totalassets"
    t.bigint "othercurrentliabilities"
    t.bigint "totalshorttermdebt"
    t.bigint "totalcurrentliabilities"
    t.bigint "otherliabilities"
    t.bigint "totallongtermdebt"
    t.bigint "totalliabilities"
    t.bigint "retainedearnings"
    t.bigint "totalstockholdersequity"
    t.bigint "cashfromoperatingactivities"
    t.bigint "cashfrominvestingactivities"
    t.bigint "cashfromfinancingactivities"
    t.bigint "capitalexpenditures"
    t.bigint "cfdepreciationamortization"
    t.bigint "netchangeincash"
    t.string "formtype"
    t.string "audited"
    t.boolean "original"
    t.string "amended"
    t.boolean "preliminary"
    t.string "currencycode"
    t.boolean "crosscalculated"
    t.string "usdconversionrate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "interest_expense_net"
    t.index ["company_id"], name: "index_financial_periods_on_company_id"
  end

  create_table "industries", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sectors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
