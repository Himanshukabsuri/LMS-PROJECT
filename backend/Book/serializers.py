from rest_framework.serializers import ModelSerializer, ValidationError
from .models import Category, Book


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        read_only_fields = ['created_at']


class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"
        read_only_fields = ['created_at', 'updated_at']

    def validate(self, data):
        total = data.get('total_copies')
        available = data.get('available_copies')

        if total is not None and available is not None:
            if available > total:
                raise ValidationError("Available copies cannot exceed total copies")

        return data