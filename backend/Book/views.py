from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Book, Category
from .serializers import BookSerializer, CategorySerializer


# 🔒 Helper function
def is_librarian(user):
    return user.is_authenticated and user.role == "librarian"


# 📂 CATEGORY

class CategoryView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not is_librarian(request.user):
            return Response({"error": "Only librarian allowed"}, status=403)

        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)
    

class BookListCreateView(APIView):

    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    def post(self, request):
        if not is_librarian(request.user):
            return Response({"error": "Only librarian allowed"}, status=403)

        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)
class BookDetailView(APIView):

    def get(self, request, pk):
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response({"error": "Book not found"}, status=404)

        serializer = BookSerializer(book)
        return Response(serializer.data)
    
class BookUpdateView(APIView):

    def put(self, request, pk):
        if not is_librarian(request.user):
            return Response({"error": "Only librarian allowed"}, status=403)

        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response({"error": "Book not found"}, status=404)

        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=400)
    
class BookDeleteView(APIView):

    def delete(self, request, pk):
        if not is_librarian(request.user):
            return Response({"error": "Only librarian allowed"}, status=403)

        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response({"error": "Book not found"}, status=404)

        book.delete()
        return Response({"message": "Book deleted"}, status=204)