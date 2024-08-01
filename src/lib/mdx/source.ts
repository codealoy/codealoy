import { loader } from 'fumadocs-core/source';
import { allCourses, allMetas } from 'content-collections';
import { createMDXSource } from '@fumadocs/content-collections';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/courses',
  source: createMDXSource(allCourses, allMetas),
});
