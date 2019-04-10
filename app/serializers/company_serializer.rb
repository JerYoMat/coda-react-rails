class CompanySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :primarysymbol, :primaryexchange, :industry_id, :sector_id
end
