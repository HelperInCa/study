package prim;

import java.util.Arrays;

public class Prim {
    public static void main(String[] args) {

    }


}

// 最小生成树: 村庄
class MinTree {
    // 邻接矩阵
    public void createGraph(MGraph graph, int vertexes, char[] data, int[][] weight) {
        int i, j;
        for (i = 0, i < vertexes, i++) {
            graph.data[i] = data[i];
            for (j = 0, j < vertexes, j++) {
                graph.weight[i][j] = weight[i][j];
            }
        }
    }


    public void showGraph(MGraph graph) {
        for (int[] link : graph.weight) {
            System.out.println(Arrays.toString(link));
        }
    }

    public void prim(MGraph graph, int v) {
        
    }
}

class MGraph {
    int vertexes;
    char[] data;// 节点数据
    int[][] weight;// 边的权值

    public MGraph(int vertexes) {
        this.vertexes = vertexes;
        this.data = new char[vertexes];
        this.weight = new int[vertexes][vertexes];
    }
}

