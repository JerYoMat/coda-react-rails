class CompanySerializer < ActiveModel::Serializer
  attributes :id, :companyname, :primarysymbol, :primaryexchange, :industry_id, :sector_id, :snapshot_link
end
