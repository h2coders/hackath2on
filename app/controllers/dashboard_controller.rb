class DashboardController < ApplicationController
  def index
    if browser.mobile? or browser.tablet?
      redirect_to mobile_path
    end
  end
  def mobile
  end
end
