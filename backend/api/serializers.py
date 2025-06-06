from rest_framework import serializers
from .models import ShapeData

class ShapeDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShapeData
        fields = '__all__'
