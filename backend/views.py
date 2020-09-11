from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.serializers import AboutSerializer, VideoSerializer, ExerciseSerializer, AskAnswerSerializer, ScoreHistorySerializer
from backend.models import About, Video, Exercise, AskAnswer, ScoreHistory


class AboutAPIView(APIView):

    def get(self, request, id, format=None):
        try:
            item = About.objects.get(pk=id)
            serializer = AboutSerializer(item)
            return Response(serializer.data)
        except About.DoesNotExist:
            return Response(status=404)

    def put(self, request, id, format=None):
        try:
            item = About.objects.get(pk=id)
        except About.DoesNotExist:
            return Response(status=404)
        serializer = AboutSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id, format=None):
        try:
            item = About.objects.get(pk=id)
        except About.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)


class AboutAPIListView(APIView):

    def get(self, request, format=None):
        items = About.objects.order_by('pk')
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(items, request)
        serializer = AboutSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = AboutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class VideoAPIView(APIView):

    def get(self, request, id, format=None):
        try:
            item = Video.objects.get(pk=id)
            serializer = VideoSerializer(item)
            return Response(serializer.data)
        except Video.DoesNotExist:
            return Response(status=404)

    def put(self, request, id, format=None):
        try:
            item = Video.objects.get(pk=id)
        except Video.DoesNotExist:
            return Response(status=404)
        serializer = VideoSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id, format=None):
        try:
            item = Video.objects.get(pk=id)
        except Video.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)


class VideoAPIListView(APIView):

    def get(self, request, format=None):
        items = Video.objects.order_by('pk')
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(items, request)
        serializer = VideoSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = VideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ExerciseAPIView(APIView):

    def get(self, request, id, format=None):
        try:
            item = Exercise.objects.get(pk=id)
            serializer = ExerciseSerializer(item)
            return Response(serializer.data)
        except Exercise.DoesNotExist:
            return Response(status=404)

    def put(self, request, id, format=None):
        try:
            item = Exercise.objects.get(pk=id)
        except Exercise.DoesNotExist:
            return Response(status=404)
        serializer = ExerciseSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id, format=None):
        try:
            item = Exercise.objects.get(pk=id)
        except Exercise.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)


class ExerciseAPIListView(APIView):

    def get(self, request, format=None):
        items = Exercise.objects.order_by('pk')
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(items, request)
        serializer = ExerciseSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = ExerciseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class AskAnswerAPIView(APIView):

    def get(self, request, id, format=None):
        try:
            item = AskAnswer.objects.get(pk=id)
            serializer = AskAnswerSerializer(item)
            return Response(serializer.data)
        except AskAnswer.DoesNotExist:
            return Response(status=404)

    def put(self, request, id, format=None):
        try:
            item = AskAnswer.objects.get(pk=id)
        except AskAnswer.DoesNotExist:
            return Response(status=404)
        serializer = AskAnswerSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id, format=None):
        try:
            item = AskAnswer.objects.get(pk=id)
        except AskAnswer.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)


class AskAnswerAPIListView(APIView):

    def get(self, request, format=None):
        items = AskAnswer.objects.order_by('pk')
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(items, request)
        serializer = AskAnswerSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = AskAnswerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ScoreHistoryAPIView(APIView):

    def get(self, request, id, format=None):
        try:
            item = ScoreHistory.objects.get(pk=id)
            serializer = ScoreHistorySerializer(item)
            return Response(serializer.data)
        except ScoreHistory.DoesNotExist:
            return Response(status=404)

    def put(self, request, id, format=None):
        try:
            item = ScoreHistory.objects.get(pk=id)
        except ScoreHistory.DoesNotExist:
            return Response(status=404)
        serializer = ScoreHistorySerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id, format=None):
        try:
            item = ScoreHistory.objects.get(pk=id)
        except ScoreHistory.DoesNotExist:
            return Response(status=404)
        item.delete()
        return Response(status=204)


class ScoreHistoryAPIListView(APIView):

    def get(self, request, format=None):
        items = ScoreHistory.objects.order_by('pk')
        paginator = PageNumberPagination()
        result_page = paginator.paginate_queryset(items, request)
        serializer = ScoreHistorySerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = ScoreHistorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
