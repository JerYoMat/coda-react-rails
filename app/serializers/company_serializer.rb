class CompanySerializer < ActiveModel::Serializer
  attributes :id, :companyname, :primarysymbol, :primaryexchange
end
