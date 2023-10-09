class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :phone, presence: true, format: { with: /\A\d{11}\z/ }
  validates :cpf, presence: true, format: { with: /\A\d{11}\z/ }
end
