
# Viết chương trình MapReduce
from mrjob.job import MRJob

class MRWordCount(MRJob):

    def mapper(self, _, line):
        # Tách dòng thành các từ
        for word in line.split():
            # Gửi mỗi từ với giá trị là 1
            yield (word.lower(), 1)

    def reducer(self, word, counts):
        # Tính tổng số lần xuất hiện của mỗi từ
        yield (word, sum(counts))

if __name__ == '__main__':
    MRWordCount.run()
