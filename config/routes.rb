Rails.application.routes.draw do

  resources :urls, :only => [:show, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => redirect('/urls/new')

end
