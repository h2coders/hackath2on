module Api
  module V1
    class WaterController < ApplicationController

      def home
        consumitions = Consumition.all.limit(20)
        render json: consumitions.to_json
      end

      def city
        consumitions = Consumition.all.limit(20)
        render json: consumitions.to_json
      end

      def person_average
        average = {average: 10.0/Random.rand(50)}
        render json: average.to_json
      end

      def city_average
        average = {average: 10.0/Random.rand(100)}
        render json: average.to_json
      end

      def postal_code
        consumitions = Consumition.all.limit(20)
        render json: consumitions.to_json
      end

      def country
        consumitions = Consumition.all.limit(20)
        render json: consumitions.to_json
      end

      def family_average
        average = {average: 10.0/Random.rand(100)}
        render json: average.to_json
      end
    end
  end
end