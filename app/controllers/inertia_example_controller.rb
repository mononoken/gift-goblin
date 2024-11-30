class InertiaExampleController < ApplicationController
  def index
    @name = params.fetch(:name, "World")

    render inertia: "InertiaExample"
  end
end
