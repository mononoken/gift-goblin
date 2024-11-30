class InertiaExampleController < ApplicationController
  def index
    @name = params.fetch(:name, "World")
  end
end
