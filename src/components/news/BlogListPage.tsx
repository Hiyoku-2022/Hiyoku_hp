/*--------------------------------------------
 NEWS記事のページネーションのコンポーネント
 (クライアント側で処理)
--------------------------------------------*/
'use client';
import React from 'react';
import Image from 'next/image';

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    loading: boolean;
}

export default function BlogPagination({ currentPage, totalPages, onPageChange, loading }: BlogPaginationProps) {
    // ページ番号リストを作成
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', gap: '10px' }}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                style={{
                    padding: '10px 16px',
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '60px',
                    cursor: 'pointer',
                    opacity: currentPage === 1 || loading ? 0.3 : 1,
                }}
            >
                <Image src="/common/iconNext.png" alt="backpage" className="transform scale-x-[-1]" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
            </button>
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    disabled={loading}
                    style={{
                        padding: '10px 18px',
                        backgroundColor: currentPage === page ? '#F7F7F7' : 'white',
                        color: '#44585F',
                        border: currentPage === page ? 'none' : '#333',
                        borderRadius: '60px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        opacity: loading ? 0.6 : 1,
                    }}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
                style={{
                    padding: '10px 16px',
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '60px',
                    cursor: 'pointer',
                    opacity: currentPage === totalPages || loading ? 0.3 : 1,
                }}
            >
                <Image src="/common/iconNext.png" alt="nextpage" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
            </button>
        </div>
    );
}