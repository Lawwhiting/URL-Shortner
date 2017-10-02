class UrlsController < ApplicationController
  def new
    @shortened_url = Url.new
  end

  def create
    @shortened_url = Url.new(url_params)
    if @shortened_url.save
      render "urls/new_url", shortened_id: @shortened_url.id
    else
      render :action => "new"
    end
  end

  def show
    @shortened_url = Url.find(params[:id])
    p @shortened_url
    redirect_to (@shortened_url.url)
  end

end

private

def url_params
  params.require(:url).permit(:url)
end
